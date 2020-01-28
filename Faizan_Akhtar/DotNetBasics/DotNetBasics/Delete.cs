using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace DotNetBasics
{
    public class Delete
    {
        public static void DoDelete()
        {
            Console.WriteLine("\n DELETE Example:\n");
            SqlConnection deleteCon = Connection.doConnection();
            try
            {
                deleteCon.Open();
                StringBuilder sbDelete = new StringBuilder();
                sbDelete.Append("DELETE FROM [dbo].[webTechnology] Where ID=7");
                String sql = sbDelete.ToString();
                using (SqlCommand command = new SqlCommand(sql, deleteCon))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine("{0} {1}", reader.GetString(0), reader.GetString(1));
                        }
                        Console.ReadLine();
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }



        }
    }
}

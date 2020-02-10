using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Dotnetbasics
{
   public class Insert
    {
        public static void insert()
        {
            SqlConnection co = Dconnection.deepakConnection();
           
            try
            {
                co.Open();
                StringBuilder sb = new StringBuilder();
                sb.Append("insert into [dbo].[netpractice] (id,data,location) values (8,'Deepak','sdlklkds'); ");
                //sb.Append("FROM [SalesLT].[ProductCategory] pc ");
                //sb.Append("JOIN [SalesLT].[Product] p ");
                //sb.Append("ON pc.productcategoryid = p.productcategoryid;");
                String sql = sb.ToString();
                using (SqlCommand command = new SqlCommand(sql, co))
                {
                    command.ExecuteNonQuery();
                    Console.WriteLine("Inserted !!");
                }
                Console.ReadLine();
                co.Close();
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }

        }

    }
}

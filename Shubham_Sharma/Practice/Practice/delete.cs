using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Practice
{
    public class delete
    {
        public static void deleteRow(int id)
        {
            SqlConnection con = connection.giveConnection();
            StringBuilder sb = new StringBuilder();
            if (con != null)
            {
                con.Open();
                sb.Append("DELETE FROM [dbo].[cSharpTask] WHERE id = "+id);
                String sql = sb.ToString();
                SqlCommand command = new SqlCommand(sql, con);
                command.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}
